/*
 * Author: ntoff, scmanjarrez
 * License: AGPLv3
 */

$(function() {
    function ExtraDistanceViewModel(parameters) {
        var self = this;

        self.control = parameters[0];

        self.control.distances1 = ko.observableArray([0.01, 0.1, 1, 10]);
        self.control.distances2 = ko.observableArray([0.02, 0.25, 2, 25]);
        self.control.distances3 = ko.observableArray([0.05, 0.5, 5, 50]);
        self.control.distances4 = ko.observableArray([75, 100, 150, 200]);

        if ($("#touch body").length == 0) {
            $(".jog-panel .distance").remove();
            $("#control-jog-z").after("\
                <div class=\"distance\" id=\"distance-selector\">\
                    <div class=\"btn-group\" data-toggle=\"buttons-radio\" id=\"jog_distance1\">\
                        <!-- ko foreach: distances1 -->\
                            <button type=\"button\" class=\"btn distance btnoed\" data-bind=\"enable: $root.isOperational() && !$root.isPrinting() && $root.loginState.isUser(), text: $data, click: function() { $root.distance($data) }, css: { active: $root.distance() === $data }, attr: { id: 'control-distance' + $root.stripDistanceDecimal($data) }\"></button>\
                        <!-- /ko -->\
                    </div>\
                    <div class=\"btn-group\" data-toggle=\"buttons-radio\" id=\"jog_distance2\">\
                        <!-- ko foreach: distances2 -->\
                            <button type=\"button\" class=\"btn distance btnoed\" data-bind=\"enable: $root.isOperational() && !$root.isPrinting() && $root.loginState.isUser(), text: $data, click: function() { $root.distance($data) }, css: { active: $root.distance() === $data }, attr: { id: 'control-distance' + $root.stripDistanceDecimal($data) }\"></button>\
                        <!-- /ko -->\
                    </div>\
                    <div class=\"btn-group\" data-toggle=\"buttons-radio\" id=\"jog_distance3\">\
                        <!-- ko foreach: distances3 -->\
                            <button type=\"button\" class=\"btn distance btnoed\" data-bind=\"enable: $root.isOperational() && !$root.isPrinting() && $root.loginState.isUser(), text: $data, click: function() { $root.distance($data) }, css: { active: $root.distance() === $data }, attr: { id: 'control-distance' + $root.stripDistanceDecimal($data) }\"></button>\
                        <!-- /ko -->\
                    </div>\
                    <div class=\"btn-group\" data-toggle=\"buttons-radio\" id=\"jog_distance4\">\
                        <!-- ko foreach: distances4 -->\
                            <button type=\"button\" class=\"btn distance btnoed\" data-bind=\"enable: $root.isOperational() && !$root.isPrinting() && $root.loginState.isUser(), text: $data, click: function() { $root.distance($data) }, css: { active: $root.distance() === $data }, attr: { id: 'control-distance' + $root.stripDistanceDecimal($data) }\"></button>\
                        <!-- /ko -->\
                    </div>\
                </div>\
            ");
        }
    }

    OCTOPRINT_VIEWMODELS.push({
        construct: ExtraDistanceViewModel,
        dependencies: [ "controlViewModel"]
    });
});
