var exifRenamer = require('exif-renamer')({
  path_separator: '\\',
  valid_extensions: ['jpg', 'jpeg']
});

exifRenamer.rename_dir('./media', 'output:{{ datetime "yyyy"}}:{{ datetime "mm"}}:{{file}}', true, function(err, result) {
  if (err) {
    console.log(err);
  }
});
