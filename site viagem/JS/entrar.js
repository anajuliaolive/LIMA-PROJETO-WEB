let videoStream;
				async function starCamera(){
					const videoElement = document.getElementById('videoElement');
					try{
						videoStream = await navigator.mediaDevices.getUserMedia({video : true});
						videoElement.srcObject = videoStream;
					}catch(error){
						console.error('erro ao abrir a camera', erro);
						alert('erro ao abrir a camera');
					}
				}
				async function stopCamera(){
					const videoElement = document.getElementById('videoElement');
					if(videoStream){
						const tracks = videoStream.getTracks();
						tracks.forEach(track =>  track.stop());
							videoElement.srcObject = null;
					}
				}