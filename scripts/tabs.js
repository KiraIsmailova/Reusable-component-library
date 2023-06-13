 // получаем все необходимые элементы
        const tabInputs = document.querySelectorAll('.tabs__input');
        const tabContents = document.querySelectorAll('.tab__content');

        // добавляем обработчики на элементы управления
        tabInputs.forEach((input) => {
            input.addEventListener('click', () => {
                // скрываем все вкладки
                tabContents.forEach((content) => {
                    content.classList.remove('active');
                });

                // отображаем содержимое выбранной вкладки
                const selectedTabContent = document.querySelector(`#${input.id}-content`);
                selectedTabContent.classList.add('active');
            });
        });