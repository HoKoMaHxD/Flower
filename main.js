window.onload = () => {
    // التأخير ثانية واحدة لضمان تحميل العناصر ثم بدء الأنيميشن
    const timeout = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(timeout);
    }, 1000);

    console.log("Vercel Deployment: Spotify & Flowers Active.");
};
