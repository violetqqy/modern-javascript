function clean(value: boolean) {
  // target.cleaned = true;
  return function(target) {
    target.cleaned = value
  }
}

@clean(true)
class Animal {

}
