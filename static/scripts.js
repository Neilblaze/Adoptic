let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(0, 0);
	
  // Captures video stream
  video = createCapture(VIDEO);
  video.size(width, height);

  // Generate new posenet method
  poseNet = ml5.poseNet(video, modelReady);
	
	// Listen new 'pose' events and re-fill global variable "poses" 
  // with an array per new pose detection.
  poseNet.on('pose', function(results) {
    poses = results;
  });
  
  video.hide();
}

function draw() {
  searchEyes();
  adjustFontSize(); 
}

var REye, LEye, eyesDist;

// Detect eye distance
function searchEyes()  {
	
  // Loop through every detected poses
  for (let i = 0; i < poses.length; i++) {
		
    // Loop through all the keypoints, for every pose detected 
			// Object describing a respective body part for every keypoint is hit 
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      let keypoint = pose.keypoints[j];
			LEye = pose.keypoints[1].position;
      REye = pose.keypoints[2].position;

      // Calculate dist between eye points
				// Bigger eyes-Distance means nearer the eyes are with respect to the camera
				// Smaller eyes-Distance means farther the eyes are with respect to the camera
      eyesDist = Math.round(Math.sqrt(Math.pow((LEye.x - REye.x), 2) + Math.pow((LEye.y - REye.y), 2)));
    }
  }
}

var fontSize;
function adjustFontSize() {
	// The font size and the eyes-Distance is inversely varied
		// Noobish formula tho
	fontSize = Math.round(500/eyesDist) * 6;
  document.getElementById('text').style.fontSize = fontSize + 'px';
}

function modelReady(){
	let story = "<strong>Have you ever heard about the term nano electronics?</strong> </br> For me, the answer is Yes! The field of nanoelectronics has been slowly growing in recent years and is the answer to the increasing demand for electronics to be smaller, yet still maintain a high performance. Nanomaterial-based components can be made much smaller than those made of traditional bulkier materials, which helps to reduce the overall size of the electronic device. Moreover, many nanomaterials are stable in most environments, whether it’s in a sensor within a harsh chemical processing environment, or in an electronic device that gives out a lot of residual heat to the internal components. While there are many areas of nanoelectronics, some of the more widely studied systems include nanomaterial-inspired energy storage and energy generation systems, various types of nanosized and molecular transistors, optoelectronic devices, and flexible/printable circuits—where the nanomaterials are often formulated into an ink and printed. Future applications will most likely include various quantum technologies if they can be realized on a commercial level, and we are likely to see an increase in the production of smaller components for classic computing systems and everyday technologies.";
  select('#text').html(story);
}


