import react, {useState} from 'react';
import ProductList from './Products';
import Product_Add from './Product_Add';
import ProductDetail from './Product_Detail';
import ProductSearch from './Product_Search';
import {BottomNavigation, Text} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
export default function App() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'ProductList', title: 'Products', focusedIcon: 'folder'},
    {key: 'Product_Add', title: 'Add', focusedIcon: 'folder'},
    {key: 'ProductSearch', title: 'Search', focusedIcon: 'find'},
    {key: 'Product_Detail', title: 'Detail', focusedIcon: 'calendar'},
  ]);
  const renderScene = BottomNavigation.SceneMap({
    ProductList: ProductList,
    Product_Add: Product_Add,
    ProductSearch: ProductSearch,
    Product_Detail: ProductDetail,
  });
  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
}
