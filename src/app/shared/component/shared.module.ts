import { UserService } from './../../user.model';
import { HttpClientModule } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { DashboardService } from './../../modules/dashboard.service';
import { PieComponent } from './../widget/pie/pie.component';
import { CustomerRetentionComponent } from './../widget/customer-retention/customer-retention.component';
import { OnlinevisitorsComponent } from './../widget/onlinevisitors/onlinevisitors.component';
import { NewusersComponent } from './../widget/newusers/newusers.component';
import { CardComponent } from './../widget/area/card.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule, MatCard, MatCardModule, MatPaginator, MatTable, MatTooltipModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AreaComponent } from '../widget/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthService } from 'src/app/auth.service';
import { rootRouterConfig } from 'src/app/app-routing.module';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent, 
    NewusersComponent,
    OnlinevisitorsComponent,
    CustomerRetentionComponent,
    PieComponent
   
  ],

  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    RouterModule.forRoot(rootRouterConfig, {useHash: false}),

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    NewusersComponent,
    OnlinevisitorsComponent,
    CustomerRetentionComponent,
    PieComponent,
   
  ],
  providers: [
    DashboardService,
    AuthService,
    UserService

    
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
