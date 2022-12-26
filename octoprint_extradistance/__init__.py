# coding=utf-8
from __future__ import absolute_import

import octoprint.plugin

__plugin_pythoncompat__ = ">=3.7,<4"


class ExtraDistancePlugin(octoprint.plugin.SettingsPlugin,
                          octoprint.plugin.AssetPlugin,
                          octoprint.plugin.TemplatePlugin):

	# SettingsPlugin mixin
	def get_settings_defaults(self):
		return dict()

	# AssetPlugin mixin

	def get_assets(self):
		return dict(
			js=["js/extradistance.js"],
			css=["css/extradistance.css"],
			less=["less/extradistance.less"]
		)

	# Softwareupdate hook
	def get_update_information(self):
		return dict(
			unknown=dict(
				displayName="Extra Distance Buttons",
				displayVersion=self._plugin_version,

				# version check: github repository
				type="github_release",
				user="scmanjarrez",
				repo="OctoPrint-ExtraDistance",
				current=self._plugin_version,

				# update method: pip
				pip="https://github.com/scmanjarrez/OctoPrint-ExtraDistance/archive/{target_version}.zip"
			)
		)


__plugin_name__ = "Extra Distance Buttons"

def __plugin_load__():
	global __plugin_implementation__
	__plugin_implementation__ = ExtraDistancePlugin()

	global __plugin_hooks__
	__plugin_hooks__ = {
		"octoprint.plugin.softwareupdate.check_config": __plugin_implementation__.get_update_information
	}
