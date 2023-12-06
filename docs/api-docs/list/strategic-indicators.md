# Strategic Indicators

This method is used to retrieve a list of strategic indicators based on the selected domain (region).

## Parameter

| Parameter    | Tipe           | Deskripsi                                                           |
| ------------ | -------------- | ------------------------------------------------------------------- |
| `domain`     | `String`       | Kode domain (wilayah) untuk mengambil indikator strategis.          |
| `lang`       | `DataLanguage` | Bahasa untuk data indikator strategis (default: `DataLanguage.id`). |
| `page`       | `int`          | Nomor halaman (default: `1`).                                       |
| `variableID` | `int?`         | ID Variable dari indikator strategis (opsional).                    |

## Contoh

Contoh penggunaan dan keluaran contoh:

![Preview](/gif/static_tables.gif)

```dart
// Mengambil data indikator strategis dari API BPS
final result = await StadataFlutter.instance.list.strategicIndicators(
  domain: 'kode_domain_contoh', // Ganti dengan kode domain yang diinginkan
  lang: DataLanguage.id,
  page: 1,
  variableID: 'contoh_kata_kunci', // Ganti dengan ID variabel yang diinginkan atau null
);

final strategicIndicators = result.data;
final pagination = result.pagination;

// Mencetak informasi halaman
print('Halaman Saat Ini: ${pagination.page}');
print('Total Halaman: ${pagination.pages}');
print('Jumlah Data dalam Halaman Ini: ${pagination.count}');
print('Per Halaman: ${pagination.perPage}');
print('Total: ${pagination.total}');
print('------------------------');

// Mencetak data indikator strategis yang diambil
for (final strategicIndicator in strategicIndicators) {
    print('ID Indikator: ${strategicIndicator.id}');
    print('Judul Indikator: ${strategicIndicator.title}');
    print('ID Variable: ${strategicIndicator.variableID}');
    print('ID Kategori: ${strategicIndicator.categoryID}');
    print('Nama: ${strategicIndicator.name}');
    print('Nilai: ${strategicIndicator.value}');
    print('Satuan: ${strategicIndicator.unit}');
    print('Sumber Data: ${strategicIndicator.dataSource}');
    print('Periode: ${strategicIndicator.period}');
    print('ID Subjek CSA: ${strategicIndicator.csaSubjectID}');
    print('ID HASH: ${strategicIndicator.hashID}');
}
```

## Properti (StrategicIndicator)

| Properti       | Tipe     | Deskripsi                       |
| -------------- | -------- | ------------------------------- |
| `id`           | `int`    | ID unik indikator.              |
| `title`        | `String` | Judul atau nama indikator.      |
| `name`         | `String` | Nama atau keterangan indikator. |
| `variableID`   | `int`    | ID variabel dari indikator.     |
| `csaSubjectID` | `int?`   | ID Subjek CSA dari indikator.   |
| `categoryID`   | `int`    | ID kategori dari indikator.     |
| `hashID`       | `String` | ID hash dari indikator.         |
| `value`        | `double` | Nilai dari indikator strategis. |
| `unit`         | `String` | Satuan dari indikator.          |
| `dataSource`   | `String` | Sumber data dari indikator.     |
| `period`       | `String` | Periode data dari indikator.    |
