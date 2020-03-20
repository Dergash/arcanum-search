<script>
export let columns = []
export let items = []

const dataTypes = {
    number: 'max-content',
    text: '1fr'
}

$: layout = columns.reduce((result, nextColumn) => {
    result += ` ${dataTypes[nextColumn.type || 'text']} `;
    return result
}, 'grid-template-columns: ')

</script>

<table style={layout}>
    <thead>
        <tr>
            {#each columns as column}
                <td class={column.type === 'number' ? 'number' : 'text'}>
                    {column.title}
                </td>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each items as item}
        <tr>
            {#each columns as column}
                <td class={column.type === 'number' ? 'number' : 'text'}>
                    {item[column.key]}
                </td>
            {/each}
        </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        display: grid;
        grid-auto-rows: 56px 52px;
    }

    thead {
        display: contents;
    }

    thead td {
        border-bottom: 1px solid rgb(255, 255, 255, 0.12);
        color: rgba(255, 255, 255, 0.5);
    }

    tbody {
        display: contents;
    }

    tr {
        display: contents;
    }
    
    tbody tr:not(:last-child) td {
        border-bottom: 1px solid rgb(255, 255, 255, 0.05);
    }
    
    td {
        padding-right: 16px;
        padding-left: 16px;
        padding-top: 6px;
        padding-bottom: 6px;
        line-height: 46px;
    }

    .number {
        text-align: right;
    }

    .text {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>
