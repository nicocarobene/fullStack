
describe("Note App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'Nicolas',
      username: 'Nicolino',
      password: 'lamidupassword'
    }
    cy.request('POST', 'http://localhost:3001/api/users', user)
  });

  it("frontpage can be opened", () => {
    cy.contains("Notes");
  });

  it("login form can be opened", () => {
    cy.contains("SHOW LOGIN").click();
  });
  it("login form can be opened", () => {
    cy.contains("SHOW LOGIN").click();
    cy.get('[placeholder="Username"]').type("Nicolino");
    cy.get('[placeholder="Password"]').type("lamidupassword");
    cy.get("#form-login-button").click();
  });
  
  // it.only('login fails with wrong password', ()=>{
  //   cy.contains("SHOW LOGIN").click();
  //   cy.get('[placeholder="Username"]').type("Nicolino");
  //   cy.get('[placeholder="Password"]').type("password incorrect");
  //   cy.get("#form-login-button").click();
  //   cy.contains('Wrong credentials')
  // })
  describe("when logged in", () => {

    beforeEach(() => {
     cy.login({username:'Nicolino',password:'lamidupassword'})
    });


    it("a new note can be created", () => {
      cy.contains('New Note').click()
      cy.get('input').type('a note created by cypress')
      cy.contains('Save').click()
      cy.contains('a note created by cypress')
    });
  });

  describe('and a note exists', ()=>{
    beforeEach(()=>{

      cy.login({username:'Nicolino',password:'lamidupassword'})

      cy.createNote({content: 'a note created by cypress'})

      cy.createNote({content: 'this is the second note'})

      cy.createNote({content: 'this is the third note'})
    }) 
  
    it('it can be made important', ()=>{
      cy.contains('a note created by cypress')
    })
  })
})

