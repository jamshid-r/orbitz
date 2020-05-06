package com.orbitz.step_definitions;

import java.util.Locale;
import java.util.Map;


import com.orbitz.beans.Entry;

import io.cucumber.core.api.TypeRegistry;
import io.cucumber.datatable.DataTableType;
import io.cucumber.datatable.TableEntryTransformer;
import io.cucumber.core.api.TypeRegistryConfigurer;;

public class EntryClassDataTableTransformer implements TypeRegistryConfigurer {
    
    public Locale locale() {
        return Locale.ENGLISH;
    }
    public void configureTypeRegistry(TypeRegistry typeRegistry) {
        typeRegistry.defineDataTableType(new DataTableType(Entry.class,
                       new TableEntryTransformer<Entry>() {
                    
            @Override
            
            public Entry transform(Map<String, String> row) throws Throwable{
                          
                            String destination = row.get("Destination");
                            String checkIn = row.get("Check-in");
                            String checkOut = row.get("Check-out");
                            String errorMessage = row.get("Error Message");
                           
                            return new Entry(destination, checkIn, checkOut, errorMessage);
                        }
                    }));
    }
}