   updateCurrentDate();
        setInterval(updateCurrentDate, 500);
        let blurEnabled = true;
        let blurTimeout;
        function toggleDetails(element) {
            const details = element.nextElementSibling;
            details.classList.toggle('open');
        }
        function toggleBlurSetting() {
            blurEnabled = document.getElementById('blur-toggle').checked;
        }

        function updateBlurStrength(value) {
            document.documentElement.style.setProperty('--blur-strength', `${value}px`);
        }

        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }

        function startBlurTimer(card) {
            if (!blurEnabled) return;
            blurTimeout = setTimeout(() => {
                document.body.classList.add('blur-effect');
                card.classList.add('hovered');
            }, 5000);
        }

        function cancelBlurTimer(card) {
            clearTimeout(blurTimeout);
            document.body.classList.remove('blur-effect');
            card.classList.remove('hovered');
        }
        function updateCurrentDate() {
            const now = new Date();
            const formattedDate = now.toISOString().replace('T', ' ').substring(0, 23);
            document.getElementById('current-date').innerText = formattedDate;
        }