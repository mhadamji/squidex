﻿// ==========================================================================
//  ISchemaEntity.cs
//  Squidex Headless CMS
// ==========================================================================
//  Copyright (c) Squidex Group
//  All rights reserved.
// ==========================================================================
namespace Squidex.Read.Schemas.Repositories
{
    public interface ISchemaEntity : IAppRefEntity
    {
        string Name { get; }
    }
}
