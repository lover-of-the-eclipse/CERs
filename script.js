anime({
    targets: '.menu-container',
    height: '720px',
    easing: 'easeInOutCubic',
    duration: 3000
})

anime({
    targets: '.title',
    easing: 'easeInOutCubic',
    duration: 3000,
    keyframes: [
        {translateY: -400, duration: 0},
        {translateY: 0, duration: 3000}
    ],
    opacity: [
        { value: "0%", duration: 0},
        { value: "0%", duration: 1400},
        { value: "100%", duration: 1600},
    ],
    delay: 500
})

anime({
    targets: '.button-container .claim-button',
    easing: 'easeInOutCubic',
    keyframes: [
        {translateX: -400, duration: 0},
        {translateX: 0, duration: 2000}
    ],
    opacity: [
        { value: 0, duration: 0},
        { value: 0, duration: 200},
        { value: 1, duration: 1600}
    ],
    delay: anime.stagger(200, {start: 2500}),
})