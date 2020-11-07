import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatCheckbox} from '@angular/material/checkbox';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-delete-checkbox',
  templateUrl: './delete-checkbox.component.html',
  styleUrls: ['./delete-checkbox.component.scss']
})
export class DeleteCheckboxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteCheckboxComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public dialogSource: any
  ) { }

  ngOnInit(): void {
  }

  closeDialog(result: string){
    this.dialogRef.close({event: result});
  }

  confirmDelete(code: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {data: `s`});
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result.event == 'yes') {
        }
      }
    );
  }

  onDelete() {
    this.dialogRef.close({delete: true});
  }

}
