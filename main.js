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
    };

function triggeredInput() {
  setTimeout(function(){
    var file = input.value;
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
