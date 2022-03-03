//common methods are defined in this file

import homepage from '../helpers/PageObject/homepage.js';
const objhomepage = new homepage();

/* This method filter black shoes based on screen height
    eg: if screen height is less than 992px then click on filter icon is applicable
*/

Cypress.Commands.add(
    "filter_black_products",
    (height) => {
        if(height < 992){
            objhomepage.click_filter_icon();
        }   
        objhomepage.click_on_black_color_option();
        objhomepage.click_on_filter_button();
        objhomepage.get_product_grid();
    }
  );