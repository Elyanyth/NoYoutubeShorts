// content.js

// Function to hide or block YouTube Shorts
function blockYouTubeShorts() {
  // Target the YouTube Shorts shelf or reel elements
  const shortsShelf = document.querySelector('ytd-reel-shelf-renderer');
  const shortsMain = document.querySelector('ytd-rich-shelf-renderer');
  // const shortsReels = document.querySelectorAll('ytd-reel-item-renderer');

  // Hide or remove the Shorts shelf
  if (shortsShelf) {
      // shortsShelf.style.display = 'none'; // Hide the element
      shortsShelf.remove(); // Alternatively, remove the element entirely
  }

  if (shortsMain) {
    // shortsMain.style.display = 'none';
    parent = shortsMain.parentElement;
    shortsMain.remove(); // Alternatively, remove the element entirely
    parent.remove();

  }

  // // Hide or remove individual Shorts reels
  // shortsReels.forEach(reel => {
  //     reel.style.display = 'none'; // Hide the element
  //     // reel.remove(); // Alternatively, remove the element entirely
  // });
}

// Run the function when the DOM is fully loaded
blockYouTubeShorts();

// Optional: Use a MutationObserver to handle dynamic content loading
const observer = new MutationObserver(blockYouTubeShorts);
observer.observe(document.body, { childList: true, subtree: true });