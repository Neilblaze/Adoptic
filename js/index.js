// root-script

let renderer = null
let detector = null
// initial set = 0
let streaming = false

$(document).ready(function(){
    // for uploading
    $("#but_upload").on("click",startUpload)

    // cam feed img input to canvas
    let video = document.getElementById("cameraImg");
    let faceCanvas = document.getElementById("faceImg");

    // video is only required for facemesh landmark segmentation, so audio = false
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function(stream) {
            // init input obj. to feed stream
            video.srcObject = stream;
            video.play();
            $(video).hide()
        })
        // Else Throw err
        .catch(function(err) {
            console.log("An error occurred! " + err);
        });

    // detect any newface    
    detector = new FaceDetector(video, faceCanvas)

    detector.loadModels().then(function (){
        // detector.initStream()
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function(stream) {
                video.srcObject = stream;
                video.play();
                $(video).hide()
                detector.initStream()
            })
            // Else Throw err
            .catch(function(err) {
                console.log("An error occurred! " + err);
            });
    })

    // parse pdf url on onClick()
    $("#pdf_url_form a").on("click", function (event){
        $("#pdf_opener").hide()
        $("#pdf_container").show()

        // setup the pdf on canvas as raw img
        let canvas = document.getElementById('pdf_canvas')
        // 1st pdf of demo array
        let url = './lorem_ipsum.pdf';

        let input_text = $("#pdf_url_form input").val()

        // if it's blank
        if(input_text !== "")
            url = input_text

        // render pdf to img on canvas    
        renderer = new PDFRender(canvas, url)
        renderer.detector = detector
        detector.controller = renderer

        // right corner ~ instruction panel view
        $("#actionsContainer").show()

    })

    // TODO @ 21.03.21 

    // init a new && old demo 
    $(".book_demo").on("click", function (){

        $("#pdf_opener").hide()
        $("#pdf_container").show()

        console.log($(this).attr("id"))
        let url = './lorem_ipsum.pdf';

        // base is lorem_ipsum, if selected other
        if ($(this).attr("id") === "tintin_pdf")
            url = './Tintin_Congo.pdf'
        // return the third demo pdf of the demo array
        else if ($(this).attr("id") === "wasteMan_pdf")
            url = './WasteManagement.pdf'

        // fetch the document on canvas by Id
        let canvas = document.getElementById('pdf_canvas')
        // fetch via link
        let input_text = $("#pdf_url_form input").val()

        if(input_text !== "")
            url = input_text

        renderer = new PDFRender(canvas, url)
        renderer.detector = detector
        detector.controller = renderer

        $("#actionsContainer").show()

    })


});

//     /**
//      * If another page rendering in progress, waits until the rendering is
//      * finised. Otherwise, executes rendering immediately.
//      */
//     function queueRenderPage(num) {
//         if (pageRendering) {
//             pageNumPending = num;
//         } else {
//             renderPage(num);
//         }
//     }
//

function startUpload(){
    var fd = new FormData();
    var files = $('#file')[0].files;

    console.log("startUpload: " + files)
    // Check file selected or not
    if(files.length > 0 ){
        fd.append('file',files[0]);
    }else{
        alert("Please select a file.");
    }
}