### Cài đặt devextreme Module
```
	npm install --save devextreme devextreme-angular
```

### 1. Sử dụng module DxDataGridModule
```
...
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
    ...
    imports: [
        ...
        DxDataGridModule,
        ...
    ]
})
export class AppModule {}
```

### Bài tập: Build Comonent sử dụng dxDataGrid hiện thị danh sách person

- Yêu cầu hiện thị đầy đủ các cột
Tên | Tuổi | Quê quán | Số điện thoại | Giới tính (1  là trai, 0 là gái)
- Tạo component persons ở Thư mục persons

### 2. Sử dụng DxFormModule 
import { DxFormModule } from 'devextreme-angular';

### Bài tập: Xây dựng form Tạo mới person Sử dụng DxFormModule
- Có validate các trường Tên, Giới tính
- Save Data dưới dạng json xuống localstoged

### 3. Sử dụng NOtifications,

### 4. Sử dụng Dialogs




