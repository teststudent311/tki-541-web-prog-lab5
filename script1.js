new Vue({
    el: '#app',
    data: {
        x: Math.floor(Math.random() * (780 - 20 + 1) + 20),
        y: Math.floor(Math.random() * (580 - 20 + 1) + 20),
        width: 800,
        height: 600
    },
    mounted() {
        window.addEventListener('keyup', this.moveCircle);
    },
    beforeDestroy() {
        window.removeEventListener('keyup', this.moveCircle);
    },
    methods: {
        moveCircle(event) {
            switch(event.key) {
                case 'a':
                case 'ArrowLeft':
                    if (this.x > 20) this.x -= 10;
                    break;
                case 'd':
                case 'ArrowRight':
                    if (this.x < this.width - 20) this.x += 10;
                    break;
                case 'w':
                case 'ArrowUp':
                    if (this.y > 20) this.y -= 10;
                    break;
                case 's':
                case 'ArrowDown':
                    if (this.y < this.height - 20) this.y += 10;
                    break;
            }
        }
    }
});
