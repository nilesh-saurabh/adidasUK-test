import helper from '../helpers/helper.js';
import homepage from '../helpers/PageObject/homepage.js'
import productdetails from '../helpers/PageObject/productdetailspage.js';
const objhelper = new helper();
const objhomepage = new homepage();
const objproductdetailspage = new productdetails();

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });
    
describe("Visit Adidas Page", function () {

    beforeEach(function () {
        //This load testdata.json fixture
        cy.fixture("testdata.json").then(function(data) {
            this.data = data;
        });
        
        objhelper.visit_homepage();
        cy.wait(2000);
    })

    it("Task 1 Enter text in Search field and Validate",function () {   
        objhomepage.click_delivery_location_popup();
        objhomepage.click_cookie_popup();
        objhomepage.check_search_bar(this.data.searchtext,this.data.url_check);
        objproductdetailspage.click_first_item();
        objproductdetailspage.handle_discount_popup(this.data.correct_url);
        objproductdetailspage.pick_size_add_bag_button();
        }
    )
    
    // it("Task 2",function () {
    //     objhelper.open_eye(this.data.appname, 'Task 2');
    //     cy.filter_black_products();
    //     objhelper.eyes_check_window_region(this.data.teststep02, objhomepage.get_product_grid())
    //     objhelper.close_eye();        
    //     }
    // )

    // it("Task 3",function () {
    //     objhelper.open_eye(this.data.appname, 'Task 3'); 
    //     cy.filter_black_products();
    //     objhomepage.click_first_product();
    //     objhelper.eyes_check_window_page(this.data.teststep03);
    //     objhelper.close_eye();     
    //     }
    // )

});
