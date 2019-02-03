var _class = ['Light', 'Dark', 'Yellow'];
/*
if (JSON.parse(localStorage.getItem('INDEX')))
{
    var _i = localStorage.getItem('INDEX');
    var _preIndex = localStorage.getItem('PREINDEX');

    document.body.classList.remove(_class[_preIndex]);
    document.body.classList.add(_class[_i]);
}
else
{
    var _i = 0;
}
*/

var _i = 0;

document.getElementById('changeTheme-btn').addEventListener('click', function ()
{
    let _preIndex = _i;
    localStorage.setItem('PREINDEX', JSON.stringify(_preIndex));
    document.body.classList.remove(_class[_i]);
    _i = -3 * (_i == 2) + _i + 1;
    document.body.classList.add(_class[_i]);
    let _index = _i;
    localStorage.setItem('INDEX', JSON.stringify(_index));
});