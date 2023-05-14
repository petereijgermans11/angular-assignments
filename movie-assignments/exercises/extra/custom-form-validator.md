Extra Assignment: Angular custom form validator
==============================================

> ## Create a custom form validator that can be used with template driven and model driven forms 

**Links**:
- [angular forms](https://angular.io/docs/ts/latest/guide/forms.html)
- [forms with validation](https://angular.io/docs/ts/latest/cookbook/form-validation.html)
- [template reference variable](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ref-vars)
- [custom form validator](https://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html)
- [Attribute directives](https://angular.io/guide/attribute-directives)

**Steps**:
> Our form has a input field `rating` which must have a value between 0 and 11 (min 1 and max 10). We want to validate this with a custom validator.
- Generate an ` attribute directive` with angular-cli with the following command: `ng g directive movies/rating-validator`.
- Check if the directive has been automatically added to the declarations array of the movies module.
> Take a look at the directive file. It is a class that has a `@Directive` decorator with a selector property. The selector property `[cwRatingValidator]` indicates how this directive can be used on any html element, i.e.: `<input cw-rating-validator />`.
- import the `Validator` interface from `@angular/forms` in the directive and let the class implement it `...RatingValidatorDirective implements Validator`.
- The error you get states you are not correctly implementing the interface. set the cursor on the class name (click on it) and find the yellow light bulb to solve this error.
- The yellow lightbulb adds two functions that comply to the interface, we only need the `validate` function, remove the other one and solve the error that is given by the `AbstractControl` type in the validate function.
> The parameter of type `AbstractControl` is actually the input control that you add the directive to. It has a `value` property that contains the number to check.
- Add an if statement that checks if the value is lower then 1 or higher then 10. If it is true then return an object `{ validateRating: true }`.
> The key `validateRating` serves as the name of the error that can be used in a component template. `true` means the error should be displayed.
- If the validator has no error to return, then it should `return null`. Add this add the end of the validate function.
- Now we can use this directive, but Angular does not know yet that this directive is actually a validator. To let Angular know about this validator, we add it to the known validators by adding the following property to the `@Directive` decorator: `providers: [{ provide: NG_VALIDATORS, useExisting: RatingValidatorDirective, multi: true }]`. Import the `NG_VALIDATORS` from `@angular/forms` and your set.
> What does this code mean? In short it adds our validator to a symbol store Angular internally keeps. multi is needed to not override the entire store, but just add our validator.

**Template driven form**
- now lets use our validator in our template driven form! Add the selector `cwRatingValidator` to the rating input in the template of the movie detail component. Thats it! An error will be added to the error object of the rating control when the validator returns true.
- To display an error, add a template reference variable `#movieRating` to the rating input and bind its `ngModel` to it.
 - Add a span beneath the `rating` input, with an error text `Error: value must be between 0 and 11!`
 - Add an `*ngIf` to the span, just like the ones for the name, but check the `validateRating` error instead.

**Model driven form**
 > To use our validator in our model driven form, we need to extract the validation code to a separate function, so we can use it in our component directly:
- Manually create a new file `rating-validator.ts` in the movies folder.
 - We will use the `ValidatorFn`, `AbstractControl` and `ValidationErrors` interfaces, so import these from `@angular/forms` in the new file.
 - Create an empty function `ratingValidator` in the file and `export` it. Give it a returntype of `ValidatorFn`.
 - Define another empty function inside the `ratingValidator` function and return it. This function will have a return type of `ValidationErrors` and one parameter `control` of type `AbstractControl`.
> The function `ratingValidator` returns a function, which means it's actually a `factory function`.
  - We are set to implement our validation code. Copy the code from the `validate` function in the rating-validator directive to the anonymous function we are returning and fix any errors that may occur.
  - We want to be able to define what the limits are from the outside, so add to parameters to the `ratingValidator` function `minValue` and `maxValue` of type `number`, and use these in stead of the fixes values.
  - Now import the `ratingValidator` in our reactive movie detail component.
  - Create a validator with the factory and add it to the `rating` `FormControl` as second parameter.
  - Add an error message `<span>` beneath the rating input field (just like name and genre) in the reactive detail component template that checks the `validateRating` property.

**Extra (model driven form)**:
- Now we can re-use our function everywhere, including in the rating-validator directive. So lets remove the duplicate code in the directive, import the `ratingValidator` function and use it in our validate function.

**Result**:
> We have created a custom form validator that can be used in any of our forms. 
