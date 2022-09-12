import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

@Resolver("Listing")
export class ListingResolver {
    @Query()
    listing() {
        return {
            id: 1,
            address: "123 Cool Street",
            propertyName: "I don't know"
        }
    }

    @ResolveField()
    propertyName(@Parent() parent) {
        return parent.propertyName.toUpperCase()
    }
}
