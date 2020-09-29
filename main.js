var input = document.querySelector('#leInput'),
    commands = {
      '.tar': 'tar xfv',
      '.zip': 'unzip',
      '.tar.bz2': 'tar jxvf',
      '.tar.gz': 'tar xfvz',
      '.tar.bz': 'tar xjf',
      '.tar.xz': 'tar xvJf',
      '.lzma': 'unlzma',
      '.bz2': 'bunzip2',
      '.rar': 'unrar',
      '.tbgz2': 'tar xvjf',
      '.tgz': 'tar xvzf',
      '.Z': 'uncompress',
      '.7z': '7z x ',
      '.xz': 'unxz',
      '.gz': 'gunzip'
    };

function triggeredInput() {
  setTimeout(function() {
    var file = input.value;
    // If a command has already been given, ignore
    var extAlreadyGiven = false;
    Object.keys(commands).forEach(function(ext) {
        if (input.value.indexOf(commands[ext]) > -1) extAlreadyGiven = true;
    });

    if (extAlreadyGiven) return;

    // Find the command for given extension
    Object.keys(commands).forEach(function(ext) {
      if(file.substr(-ext.length) == ext) {
        input.value = commands[ext] + ' ' + file;
        input.select();
      }
    });
  }, 4);
};

input.addEventListener('paste', triggeredInput);
input.addEventListener('keydown', function(e) {
  if(e.keyCode == 13) triggeredInput();
});
