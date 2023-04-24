# Cas49

![Old README](./github_images/Screenshot_1.png)

## Primer ruta

![Primer Ruta](./github_images/Untitled.png)

### Pokretanje aplikacije

```
    npm start
```


32 proizvoda -> 10 proizvoda po stranici

Math.ceil(ukupnoProizvoda / proizvodiPoStranici) -> 4

fetch('https://nasjson.com/proizvodi?page=4')
      .then(response => response.json())
      .then(json => console.log(json))

U apiju dohvatimo sve proizvode 1, 2, 3, ..., 32

arr.filter((el, index) => **index >= (stranica - 1)*proizvodiPoStranici + 1 && index <= (stranica) * proizvodiPoStranici**)