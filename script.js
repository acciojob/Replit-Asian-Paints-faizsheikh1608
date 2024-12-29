//your JS code here. If required.
const gridContainer = document.getElementById('grid-container');
    for (let i = 1; i <= 9; i++) {
      const gridItem = document.createElement('div');
      gridItem.className = 'grid-item';
      gridItem.id = i;
      gridItem.textContent = i;
      gridContainer.appendChild(gridItem);
    }

    // Change color functionality
    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('reset_button');

    changeButton.addEventListener('click', () => {
      const blockId = document.getElementById('block_id').value;
      const color = document.getElementById('colour_id').value;

      // Reset all blocks to transparent
      document.querySelectorAll('.grid-item').forEach(item => {
        item.style.backgroundColor = 'transparent';
      });

      // Change the background color of the selected block
      const block = document.getElementById(blockId);
      if (block) {
        block.style.backgroundColor = color;
      } else {
        alert('Invalid Block ID. Please enter a number between 1 and 9.');
      }
    });

    // Reset functionality
    resetButton.addEventListener('click', () => {
      document.querySelectorAll('.grid-item').forEach(item => {
        item.style.backgroundColor = 'transparent';
      });
      document.getElementById('block_id').value = '';
      document.getElementById('colour_id').value = '';
    });
