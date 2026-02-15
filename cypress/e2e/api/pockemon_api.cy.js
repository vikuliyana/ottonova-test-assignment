describe('PokeAPI Backend Tests', () => {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

    it('Assert Pikachu data and lightning-rod ability', () => {
        cy.request(`${baseUrl}/pikachu`).then((response) => {
            expect(response.status).to.eq(200);

            expect(response.body.name).to.eq('pikachu');

            const lightningRod = response.body.abilities.find(
                (item) => item.ability.name === 'lightning-rod'
            );

            expect(lightningRod, 'Should have lightning-rod ability').to.not.be.undefined;
            expect(lightningRod.ability).to.have.property('url');
        });
    });

    it('Mock Charmander request to return 404', () => {
        cy.intercept('GET', `${baseUrl}/pokemon/charmander`, {
            statusCode: 404,
        })

        cy.window().then((win) => {
            return win.fetch(`${baseUrl}/pokemon/charmander`);
        }).then((response) => {
            expect(response.status).to.eq(404);
        })
    });
});