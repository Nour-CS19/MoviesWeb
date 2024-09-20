function changeVideo(server) {
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
    const serverTitle = document.getElementById('server-title');

    // Change the video and the title based on the server
    switch (server) {
        case 'server1':
            videoSource.src = 'Session 3.mp4'; // ضع مسار الفيديو هنا
            serverTitle.innerText = 'تشغيل من سيرفر 1';
            break;
        case 'server2':
            videoSource.src = 'Session 3.mp4'; // ضع مسار الفيديو هنا
            serverTitle.innerText = 'تشغيل من سيرفر 2';
            break;
        case 'server3':
            videoSource.src = 'Session 3.mp4'; // ضع مسار الفيديو هنا
            serverTitle.innerText = 'تشغيل من سيرفر 3';
            break;
        case 'server4':
            videoSource.src = 'Session 3.mp4'; // ضع مسار الفيديو هنا
            serverTitle.innerText = 'تشغيل من سيرفر 4';
            break;
        case 'server5':
            videoSource.src = 'Session 3.mp4'; // ضع مسار الفيديو هنا
            serverTitle.innerText = 'تشغيل من سيرفر 5';
            break;
        default:
            videoSource.src = '';
            serverTitle.innerText = 'اختر سيرفرًا لمشاهدة الفيديو';
    }

    // Reload the video
    videoPlayer.load();
}
