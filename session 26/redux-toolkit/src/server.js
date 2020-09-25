import { Server } from 'miragejs';

export function makeServer({ enviroment = 'test' } = {}) {
    let server = new Server({
        enviroment,
        routes() {
            this.get('/api/randomnumber', () => {
                return Math.ceil(Math.random() * 10);
            });
        },
    });
    
    return server;
}