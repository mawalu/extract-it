var input = document.querySelector('#leInput'),
    commands = {
      '.tar': 'tar xfv',
      '.zip': 'unzip',
      '.tar.bz2': 'tar jxvf',
      '.tar.gz': 'tar xfvz',
      '.tar.bz': 'tar xjf',
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
