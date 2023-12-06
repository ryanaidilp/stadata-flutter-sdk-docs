# Strategic Indicators

This method is used to retrieve a list of strategic indicators based on the selected domain (region).

## Parameters

| Parameter | Type           | Description                                                              |
| --------- | -------------- | ------------------------------------------------------------------------ |
| `domain`  | `String`       | The domain (region) code for retrieving strategic indicators.            |
| `lang`    | `DataLanguage` | The language for strategic indicators data (default: `DataLanguage.id`). |

## Example

Example usage and sample output:

![Preview](/gif/subject_categories.gif)

```dart
// Fetch strategic indicators data from BPS API
final result = await StadataFlutter.instance.list.strategicIndicators(domain: '7200');
final strategicIndicatorsList = result.data;
final pagination = result.pagination;


// Print pagination info
print('Current Page: ${pagination.page}');
print('Total Pages: ${pagination.pages}');
print('Data Count in This Page: ${pagination.count}');
print('Per Page: ${pagination.perPage}');
print('Total: ${pagination.total}');
print('------------------------');

// Print the retrieved strategic indicator data
for (final strategicIndicator in strategicIndicatorsList) {
    print('Strategic Indicator ID: ${strategicIndicator.id}');
    print('Strategic Indicator Name: ${strategicIndicator.name}');
}
```

## Properties (StrategicIndicator)

| Property | Type     | Description                                     |
| -------- | -------- | ----------------------------------------------- |
| `id`     | `int`    | The unique identifier for the subject category. |
| `name`   | `String` | The name for the subject category.              |
