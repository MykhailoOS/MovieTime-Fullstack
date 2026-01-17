document.addEventListener('DOMContentLoaded', () => {

    function isVisible(element, offset = 50) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top + scrollTop;
        const elementHeight = element.offsetHeight;

        return (
            scrollTop + windowHeight + offset > elementTop &&
            scrollTop < elementTop + elementHeight
        );
    }

    function handleScrollAnimation() {
        const elements = document.querySelectorAll(
            '.animation_up, .animation_line, .animation_opacity, .animation_rotate, .animation_rotate_2, .animation_top'
        );

        elements.forEach(el => {
            if (isVisible(el)) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); 
});
