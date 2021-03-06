/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Squidex UG (haftungsbeschränkt). All rights reserved.
 */

// tslint:disable: max-line-length

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard, ContentMustExistGuard, LoadLanguagesGuard, SchemaMustExistPublishedGuard, SchemaMustNotBeSingletonGuard, SqxFrameworkModule, SqxSharedModule, UnsetContentGuard } from '@app/shared';
import { ArrayEditorComponent, ArrayItemComponent, ArraySectionComponent, AssetsEditorComponent, CommentsPageComponent, ContentComponent, ContentCreatorComponent, ContentEventComponent, ContentFieldComponent, ContentHistoryPageComponent, ContentListCellDirective, ContentListFieldComponent, ContentListHeaderComponent, ContentListWidthPipe, ContentPageComponent, ContentSectionComponent, ContentSelectorComponent, ContentSelectorItemComponent, ContentsFiltersPageComponent, ContentsPageComponent, ContentStatusComponent, ContentValueComponent, ContentValueEditorComponent, CustomViewEditorComponent, DueTimeSelectorComponent, FieldEditorComponent, FieldLanguagesComponent, GroupFieldsPipe, PreviewButtonComponent, ReferenceItemComponent, ReferencesEditorComponent, SchemasPageComponent, StockPhotoEditorComponent } from './declarations';

const routes: Routes = [
    {
        path: '',
        component: SchemasPageComponent,
        canActivate: [LoadLanguagesGuard],
        children: [
            {
                path: ''
            },
            {
                path: ':schemaName',
                canActivate: [SchemaMustExistPublishedGuard],
                children: [
                    {
                        path: '',
                        component: ContentsPageComponent,
                        canActivate: [SchemaMustNotBeSingletonGuard],
                        canDeactivate: [CanDeactivateGuard],
                        children: [
                            {
                                path: 'filters',
                                component: ContentsFiltersPageComponent
                            }
                        ]
                    },
                    {
                        path: 'new',
                        component: ContentPageComponent,
                        canActivate: [SchemaMustNotBeSingletonGuard, UnsetContentGuard],
                        canDeactivate: [CanDeactivateGuard]
                    },
                    {
                        path: ':contentId',
                        component: ContentPageComponent,
                        canActivate: [ContentMustExistGuard],
                        canDeactivate: [CanDeactivateGuard],
                        children: [
                             {
                                path: 'history',
                                component: ContentHistoryPageComponent,
                                data: {
                                    channel: 'contents.{contentId}'
                                }
                            },
                            {
                               path: 'comments',
                               component: CommentsPageComponent
                           }
                        ]
                    }
                ]
            }]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SqxFrameworkModule,
        SqxSharedModule
    ],
    declarations: [
        ArrayEditorComponent,
        ArrayItemComponent,
        ArraySectionComponent,
        AssetsEditorComponent,
        CommentsPageComponent,
        ContentComponent,
        ContentCreatorComponent,
        ContentEventComponent,
        ContentFieldComponent,
        ContentHistoryPageComponent,
        ContentListCellDirective,
        ContentListFieldComponent,
        ContentListHeaderComponent,
        ContentListWidthPipe,
        ContentPageComponent,
        ContentSectionComponent,
        ContentSelectorComponent,
        ContentSelectorItemComponent,
        ContentsFiltersPageComponent,
        ContentsPageComponent,
        ContentStatusComponent,
        ContentValueComponent,
        ContentValueEditorComponent,
        CustomViewEditorComponent,
        DueTimeSelectorComponent,
        FieldEditorComponent,
        FieldLanguagesComponent,
        GroupFieldsPipe,
        PreviewButtonComponent,
        ReferenceItemComponent,
        ReferencesEditorComponent,
        SchemasPageComponent,
        StockPhotoEditorComponent
    ]
})
export class SqxFeatureContentModule {}