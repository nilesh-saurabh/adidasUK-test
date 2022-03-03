/* 
    This file simplifies test execution by providing commonly used functions
*/

/// <reference types="cypress" />

class helper{
    
    visit_homepage() {
        cy.visit(Cypress.env("AdidasUK"),{
            headers: {
              "Accept-Encoding": "gzip, deflate, br"
            }
        })
    }
    
    open_eye(appname,testname) {
        cy.eyesOpen({
            appName: appname,
            testName: testname
          });
    }

    eyes_check_window_region(name,object) {
        cy.eyesCheckWindow({
            tag: name,
            target: 'region',
            selector: {
                type: 'css',
                selector: object
            }
        })
    }

    eyes_check_window_page(name) {
        cy.eyesCheckWindow(name);
    }


    
    set_viewports(height, width){
        cy.viewport(height, width)
    }
    
    close_eye(){
        cy.eyesClose()
    }
}

export default helper;


