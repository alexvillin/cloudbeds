# cloudbeds

### Watch here https://alexvillin.github.io/cloudbeds/#/

Main Components:
- Box
```html
  <Box :index="i"/>
```
```
  Props: 
    index: Number // unique box id
```
- Ruler
```html
   <Ruler :amount="counter" position="top" step="100" />
```
```
  Props: 
      position: String //['top', 'left']
      step: Number // in pixels ruler step (optionsl)
      amount: Number //amount of blocks in parent scope
 ```
 ### Project setup
 
 ```
 git clone https://github.com/alexvillin/cloudbeds.git
cd ./cloudbeds
npm install
npm run serve
 ```
