

```javascript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  // Colors
  primary: '#000',
  secondary: '#fff',
  accent: '#f00',

  // Typography
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
  },

  // Spacing
  spacingSmall: {
    margin: 5,
  },
  spacingMedium: {
    margin: 10,
  },
  spacingLarge: {
    margin: 15,
  },
});

export default styles;
```

