const cursor = document.querySelector('.cursor')
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top:" + (e.pageY - 10) + "px;left:" + (e.pageX - 10) + "px;")

})
cursor.addEventListener('mousedown', () => {
    cursor.style.scale = "2";
})
cursor.addEventListener('mouseup', () => {
    cursor.style.scale = "1";
})



window.addEventListener('scroll', () => {
    console.log("scrolling");

    // Ensure the custom scrollbar element exists
    const customScrollbar = document.querySelector('.custom-scrollbar');
    const thumb = document.querySelector('.scrollbar-thumb');

    // Check if both the scrollbar container and thumb element exist
    if (!customScrollbar || !thumb) return;

    // Ensure the document has valid height properties
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    if (typeof documentHeight !== 'number' || typeof viewportHeight !== 'number' || typeof scrollTop !== 'number') return;
    if (documentHeight === 0 || viewportHeight === 0) return;

    // Calculate the thumb's height relative to the viewport and page scroll height
    const thumbHeightRatio = viewportHeight / documentHeight;
    const thumbHeight = customScrollbar.clientHeight * thumbHeightRatio;

    // Set the thumb's height, ensuring it's valid
    if (thumbHeight > 0 && !isNaN(thumbHeight)) {
        console.log('setting height ', thumbHeight);
        thumb.style.height = `${thumbHeight}px`;  // Set height directly
    }

    // Calculate the scroll position as a ratio and move the thumb accordingly
    const scrollPositionRatio = scrollTop / (documentHeight - viewportHeight);
    console.log("ratio", scrollPositionRatio);

    // Ensure the scroll position ratio is within bounds and valid
    if (!isNaN(scrollPositionRatio) && scrollPositionRatio >= 0 && scrollPositionRatio <= 1) {
        const thumbPosition = (customScrollbar.clientHeight - thumbHeight) * scrollPositionRatio;
        console.log("position ", thumbPosition);

        // Apply the transform to move the thumb, ensuring thumbPosition is valid
        if (!isNaN(thumbPosition)) {
            console.log("it is not a NaN");
            thumb.style.transform = `translateY(${thumbPosition}px)`;  // Set translateY directly
        }
    }
});