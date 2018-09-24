# Smart Home Blog

This is a theme to be used within Wordpress. It should go inside of a themes folder and be set as the active theme in the wp-admin. Follow these steps in order, one by one.

# Server setup

Download [MAMP](https://www.mamp.info/en/)
We will use this to run a APACHE server.

Set the following inside of MAMP > Preferences

* Apache Port : 8888
* Nginx Port : 7888
* MySQL port : 8889

# Wordpress Setup

Access the htdocs folder inside of MAMP.
File Path: `/Applications/MAMP/htdocs/`

This folder will house the wordpress directory for this site.

Download [Wordpress](https://wordpress.org/download/)
Unzip the wordpress download and place it inside of the htdocs folder, and rename it to smarthome.

1. Start the Apache servers via MAMP
2. On the page MAMP opens, go to PHPMyAdmin, or paste the following URL in to a new page: `http://localhost:8888/MAMP/index.php?page=phpmyadmin&language=English`
3. Click Databases. Database Name : smarthome. Create the database.
4. Open up localhost:8888 (This will be different if you did not set your preferences for MAMP).
5. Open up a new tab on `http://localhost:8888/` (Again port will be different if you did not set MAMP preferences) and click on smarthome
6. Install Wordpress by going through the steps. For Database connection:

* Database Name : smarthome (This should match the database you created earlier)
* Username: root
* Passwrod: root
* Database Host : localhost
* Table Prefix: wp_


7. Set up Username and Password for WP Admin privelages as directed. Name of the website is smarthome.

You now have a wordpres instance set up.

# Theme Setup

Navigate to this folder: `/Applications/MAMP/htdocs/smarthome/wp-content/themes`

You will see three other themes here, twentyfifteen, twentyseventeen, twentysixteen.

Clone this repo `git clone https://github.com/OtariKobiashvili/smarthome.git`, or Download it as a ZIP.

Make sure that you put it into the *themes* folder, under the name smarthome.

Next:

1. Login to WP-Admin for smarthome at `http://localhost:8888/smarthome/wp-login.php`. You will use the username and password you set up earlier.
2. Navigate to Appearance > Themes. You will see a theme called SmartHome Blog, hover over it and click Activate.
3. Go back to the home page, the theme will now be active.

# Development Setup

Navigate to this folder inside your terminal `/Applications/MAMP/htdocs/homekit/wp-content/themes/smarthome`

1. Open in VSC(we will only use this) `code .`.
2. Run Gulp. `gulp`.

This will open a new window that is a proxy of the inital localhost:8888 site. All changes to PHP and JS will reload the page. All changes to SCSS will stream and update on page.

