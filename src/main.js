import {
    bootstrapCameraKit,
    CameraKitSession,
    createMediaStreamSource,
    Transform2D,
  } from '@snap/camera-kit';

  (async function (){
    var cameraKit = await bootstrapCameraKit({apiToken:'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzI2NTY1MzEwLCJzdWIiOiIyN2NmNDQwYy04YjBkLTQ5ZDEtYTM2MC04YjdkODQ5OTM3ZWJ-U1RBR0lOR340Y2ZhYTJiOC1kYWY4LTRhZDYtODYwNy1iMmI5NWYzMDVmMzAifQ.q8qMDDOzMv4jFiZ8NRqQ8-qDJMV4l5YmOex67WC6DqI'})

    const session = await cameraKit.createSession()
    document.getElementById('canvas').replaceWith(session.output.live)

    const { lenses } = await cameraKit.lensRepository.loadLensGroups(['276ddfa1-5fbe-4099-aaaf-ceb9c81bb17f'])

    session.applyLens(lenses[0])
    let mediaStream = await navigator.mediaDevices.getUserMedia({ video: {
        facingMode: 'environment'
    } });

    const source = createMediaStreamSource(mediaStream,{
        cameraType:'back'
    })
    
    await session.setSource(source)

    session.source.setRenderSize(window.innerWidth, window.innerHeight)

    session.play()
})();