/// <reference types="cypress" />

const first_item = '.img_with_fallback___1aENo.glass-product-card__image.performance-item';
const discount_popup = '.gl-modal__close';
const close_button = '[aria-label="Close"]';
const size_selection = '.size-selector___2htsB .sizes___3Stmf .gl-label';
const adding_item = '.add-to-bag___3wgQk';

class productdetails{

    click_first_item(){
     //const creditBalance = cy.get('.img_with_fallback___1aENo.glass-product-card__image.performance-item').eq(0).value();
     //console.log(creditBalance);
     cy.get(first_item).eq(0).click();
    }

    handle_discount_popup(correcturl){
        cy.wait(5000)
        cy.get(discount_popup).get(close_button).click();
        //cy.url().should('have.attr', 'target', '_blank');
    }

    pick_size_add_bag_button(){
        cy.wait(5000)
        cy.get(size_selection).eq(0).click();
        cy.wait(5000);
        cy.get(adding_item).contains('Add To Bag').click();

    }
}

export default productdetails