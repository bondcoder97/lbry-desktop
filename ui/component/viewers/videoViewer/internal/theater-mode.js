export function addTheaterModeButton(player, toggleVideoTheaterMode) {
  var myButton = player.controlBar.addChild('button', {
    text: 'Theater mode',
    clickHandler: () => {
      toggleVideoTheaterMode();
    },
  });

  myButton.addClass('vjs-button--theater-mode');
  myButton.setAttribute('title', 'Theater mode');
}
