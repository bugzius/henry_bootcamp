const antiTrollsSecurity = require('./antiTrollsSecurity');

describe('PARTE 02', () => {
   describe('Seguridad Anti Trolls', () => {
      it('Debe devolver el mismo string pero habiendo eliminado todas las vocales', () => {
         expect(antiTrollsSecurity('This website is for losers LOL!')).toBe(
            'Ths wbst s fr lsrs LL!'
         );
         expect(antiTrollsSecurity('What are you, a communist?')).toBe(
            'Wht r y,  cmmnst?'
         );
      });
      it('Debe retornar un error si el argumento no es un string', () => {
         expect(() => {
            antiTrollsSecurity(199);
         }).toThrow('El argumento debe ser un string');
         
         expect(() => {
            antiTrollsSecurity(null);
         }).toThrow('El argumento debe ser un string');
         
         expect(() => {
            antiTrollsSecurity(undefined);
         }).toThrow('El argumento debe ser un string');
         
         expect(() => {
            antiTrollsSecurity(function(){});
         }).toThrow('El argumento debe ser un string')
      });

      it('Debe retornar un strin vacío', () => {
         expect(antiTrollsSecurity('')).toBe('');
      })

   });
});
