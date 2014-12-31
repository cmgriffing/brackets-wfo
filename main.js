/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

/** Simple extension that adds a "File > Hello World" menu item */
define(function (require, exports, module) {
    "use strict";

    $("#project-files-header").css('display', 'none');
    $("#project-files-container").css('display', 'none');
    
    $("#working-set-list-container").css('height', '100%');
    $(".open-files-container").css('max-height', '100%');

});