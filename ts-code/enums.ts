// const beforeLoad = 'beforeLoad';
// const loading = 'loading';
// const loaded = 'loaded';

enum LoadingState {
  beforeLoad = 'beforeLoad',
  loading = 'loading',
  loaded = 'loaded',
}

const isLoading = (state: LoadingState) => state === LoadingState.beforeLoad;

// can not call 'dog'
// console.log(isLoading('dog'));

console.log(isLoading(LoadingState.beforeLoad));
