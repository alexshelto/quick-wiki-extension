

// Initialzing the application
chrome.runtime.onInstalled.addListener(function() {
  console.log('on install triggered');
});

chrome.omnibox.onInputEntered.addListener(
  function(text)
  {
      chrome.tabs.getSelected(null, function(tab)
      {
          var url;
          if (text.substr(0, 7) == 'https://') {
              url = text;

          
          } else {
            text = text.split(' ').join('_');
            console.log(text);
              url = 'https://wikipedia.org/wiki/' + text;
          }
          chrome.tabs.update(tab.id, {url: url});
      });
  }
);
