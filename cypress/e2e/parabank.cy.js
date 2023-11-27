describe('Parabank testing ', () => {
  
    it('Demo', ()=>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm");
        cy.contains("Register").click();
        cy.get('[id="customer.firstName"]').type("Mohammed");
        cy.get('[id="customer.lastName"]').type("Nomaan");
        cy.get('[id="customer.address.street"]').type("44th street meducure hospital");
        cy.get('[id="customer.address.city"]').type("Bangalore");
        cy.get('[id="customer.address.state"]').type("Bangalore");
        cy.get('[id="customer.address.zipCode"]').type("560089");
        cy.get('[id="customer.phoneNumber"]').type("9876543210");
        cy.get('[id="customer.ssn"]').type("1234567890");
        cy.get('[id="customer.username"]').type("nomaan");
        cy.get('[id="customer.password"]').type('nomaan123');
        cy.get('[id="repeatedPassword"]').type('nomaan123');
        cy.get('input[value="Register"]').click();
        cy.contains("This username already exists")
        cy.get('input[name="username"]').type("nomaan");
        cy.get('input[name="password"]').type("nomaan123");
        cy.get('input[value="Log In"]').click();



        //
        cy.contains("Open New Account").click();
        cy.get('#type').select("SAVINGS");
        cy.get("#fromAccountId").select("27885");
        // cy.contains("SAVINGS").click();
        cy.get('input[value="Open New Account"]').click();

        //
        cy.contains("Bill Pay").click();
        cy.get("input[name='payee.name']").type("virat");
        cy.get("input[name='payee.address.street']").type("45 street jayangar");
        cy.get("input[name='payee.address.city']").type("Bangalore");
        cy.get("input[name='payee.address.state']").type("Karnataka");
        cy.get("input[name='payee.address.zipCode']").type("560011");
        cy.get("input[name='payee.phoneNumber']").type("974356789")
        cy.get("input[name='payee.accountNumber']").type("9087563412");
        cy.get("input[name='verifyAccount']").type("9087563412");
        cy.get("input[name='amount']").type("500");
        cy.get("select[name='fromAccountId']").select("30660");
        cy.get("input[value='Send Payment']").click();

    })
})
