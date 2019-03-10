import { AuthenticationService } from './../shared/services/authentication.service';
import { ServicesService } from './../shared/services/services.service';
import { Inject, Component, OnInit, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { HttpParams } from '@angular/common/http';


export class ServiceItemNode {
  children: ServiceItemNode[];
  item: string;
  value: string;
}

/** Flat to-do item node with expandable and level information */
export class ServiceItemFlatNode {
  item: string;
  value: string;
  level: number;
  expandable: boolean;
}



export class Category {
  name: string;
  equals(name: string): boolean {

    if (this.name = name) {
      return true;
    }

    return false;
  }
  services: IndividualService[] = [];
}

export class IndividualService {
  name: string;
  id: string;
}
/**
 * The Json object for to-do list data.
 */
let TREE_DATA = {};


@Injectable()
export class ChecklistDatabase {
  dataChange = new BehaviorSubject<ServiceItemNode[]>([]);

  get data(): ServiceItemNode[] { return this.dataChange.value; }

  constructor(private services: ServicesService) {
    this.initialize();
  }

  initialize() {

    TREE_DATA = JSON.parse(localStorage.getItem('service_tree'));

    //  console.log(TREE_DATA);
    const data = this.buildFileTree(TREE_DATA, 0);

    // Notify the change.
    this.dataChange.next(data);

    // Build the tree nodes from Json object. The result is a list of `ServiceItemNode` with nested
    //     file node as children.

  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `ServiceItemNode`.
   */
  buildFileTree(obj: object, level: number): ServiceItemNode[] {
    return Object.entries(obj).reduce<ServiceItemNode[]>((accumulator, en) => {
      const value = en[1];

      const node = new ServiceItemNode();
      node.item = en[0];


      if (value != null && value != 0) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = en[1];
          node.value = en[0];
        }
      }

      return accumulator.concat(node);
    }, []);
  }


  insertItem(parent: ServiceItemNode, name: string) {
    if (parent.children) {
      parent.children.push({ item: name } as ServiceItemNode);
      this.dataChange.next(this.data);
    }
  }

  updateItem(node: ServiceItemNode, name: string) {
    node.item = name;
    this.dataChange.next(this.data);
  }
}

/**
 * @title Tree with checkboxes
 */


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dproz-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  // providers: [StateService]

})
export class ServicesComponent implements OnInit {

  constructor(public dialog: MatDialog, private services: ServicesService, private auth: AuthenticationService) {

    // services.getServiceCategories().subscribe( c =>{
    //      this.categories = c;
    //      console.log(c);
    // });
    // this.setPro();
    // const options = { params: new HttpParams().set('country', 'Tanzania') };
    // console.log(JSON.stringify(options));
    console.log('lllll');
    this.setPro();
  }

  private categories = {};
  private categoryArray: Category[] = new Array();
  panelOpenState = true;
  proRef;

  animal: string;
  name: string;
  user_ref: string;
  user;

  setPro() {

    console.log("pro"); 
    let businesses = JSON.parse(localStorage.getItem('user_details')).businesses;
    if (businesses.length > 0) {
      let proId = businesses[0];
      this.proRef = proId;
      this.auth.getPro(proId)
        .subscribe(pro => {

          console.log(pro);
          localStorage.setItem('pro_details', JSON.stringify(pro));


        });
        console.log('pro');

    }
  }


  ngOnInit(): void {
    //  throw new Error("Method not implemented.");
    this.user_ref = localStorage.getItem('user-reference');
    this.user = JSON.parse(localStorage.getItem('user_details'));

    //  this.user
  }

  deleteService(service) {

    if (confirm('Are you sure to delete service ' + service.name)) {
      console.log('deleted');
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditServiceDialogComponent, {
      // width: '600px',

      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      const data = JSON.parse(localStorage.getItem('all_services'));
      const postingString = '';
      let count = 0;

      result._selection.forEach(element => {

        if (count > 0) {
        postingString.concat(',');
        }

        postingString.concat(element.value);
        count++;

        const serv = data.filter(v => {
          if (v.serviceNumber === element.value) {
            console.log(element.value);
            console.log(v.serviceNumber);
          }

          return (v.serviceNumber === element.value);

        })[0];

        console.log(serv);
        let found = false;
        this.categoryArray.forEach(c => {
          if (c.name === serv.category.categoryName) {
            const service = new IndividualService();
            service.name = serv.serviceDescription;
            service.id = serv.serviceNumber;
            c.services.push(service);
            found = true;
          }
        });


        if (!found) {
          const newCat = new Category();
          newCat.name = serv.category.categoryName;
          const service = new IndividualService();
          service.name = serv.serviceDescription;
          service.id = serv.serviceNumber;
          newCat.services.push(service);
          this.categoryArray.push(newCat);
        }

      });

      this.services.putServices(this.proRef, postingString)
                    .subscribe( services => {
                        console.log(services);
                    });

      console.log(this.categoryArray);
      console.log(data);

      console.log(result._selection);
      this.animal = result;
    });

  }
}

@Component({
  selector: 'edit-service',
  templateUrl: './edit-service-dialog.html',
  styleUrls: ['./edit-service-dialog.css'],
  providers: [ChecklistDatabase],
})

export class EditServiceDialogComponent {
  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<ServiceItemFlatNode, ServiceItemNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<ServiceItemNode, ServiceItemFlatNode>();

  /** A selected parent node to be inserted */
  selectedParent: ServiceItemFlatNode | null = null;

  /** The new item's name */
  newItemName = '';

  treeControl: FlatTreeControl<ServiceItemFlatNode>;

  treeFlattener: MatTreeFlattener<ServiceItemNode, ServiceItemFlatNode>;

  dataSource: MatTreeFlatDataSource<ServiceItemNode, ServiceItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<ServiceItemFlatNode>(true /* multiple */);
  // constructor(
  //   public dialogRef: MatDialogRef<EditServiceComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: DialogData)
  //    {

  //    }
  constructor(public dialogRef: MatDialogRef<EditServiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private database: ChecklistDatabase) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<ServiceItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => {
      this.dataSource.data = data;

      console.trace();
    });
  }

  getLevel = (node: ServiceItemFlatNode) => node.level;

  isExpandable = (node: ServiceItemFlatNode) => node.expandable;

  getChildren = (node: ServiceItemNode): ServiceItemNode[] => node.children;

  hasChild = (_: number, _nodeData: ServiceItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: ServiceItemFlatNode) => _nodeData.item === '';

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: ServiceItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.item === node.item
      ? existingNode
      : new ServiceItemFlatNode();
    flatNode.item = node.item;
    flatNode.value = node.value;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  /** Whether all the descendants of the node are selected */
  descendantsAllSelected(node: ServiceItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    return descendants.every(child => this.checklistSelection.isSelected(child));
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: ServiceItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  ServiceItemSelectionToggle(node: ServiceItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
  }

  /** Select the category so we can insert the new item. */
  addNewItem(node: ServiceItemFlatNode) {
    const parentNode = this.flatNodeMap.get(node);
    this.database.insertItem(parentNode!, '');
    this.treeControl.expand(node);
  }

  /** Save the node to database */
  saveNode(node: ServiceItemFlatNode, itemValue: string) {
    const nestedNode = this.flatNodeMap.get(node);
    this.database.updateItem(nestedNode!, itemValue);
  }


  onNoClick(): void {
    this.dialogRef.close(this.checklistSelection);
  }

}
