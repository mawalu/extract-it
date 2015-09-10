var input = document.querySelector('#leInput'),
    commands = {
      '.tar': 'tar xfv',
      '.zip': 'unzip',
      '.tar.bz2': 'tar jxvf',
      '.tar.gz': 'tar xfvz',
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
